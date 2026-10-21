import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";
import generate from "../middleware/genratetoken.js";

const Signup = async (req, res) => {
  const { username, password, email } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);

  try {
    const userexists = await prisma.user.findUnique({
      where: { email },
    });
    if (userexists) {
      return res.status(409).json({ message: "already exists" });
    }
    const user = await prisma.user.create({
      data: { username, password: hashed, email },
    });

    res.status(200).json({
      data: {
        user,
      },
      message: "account have been created",
    });
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: "something went wrong" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const passwordMatches = await bcrypt.compare(password, user.password);

  if (!passwordMatches) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = generate(user.id);
  return res.status(200).json({ token, message: "Login successful" });
};

export { Signup, login };
