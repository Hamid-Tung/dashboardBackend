import User from "../Models/user.model.js";

export const createUser = async (req, res) => {
  console.log(req.body);
  const { firstname, lastname, email, password } = req.body;

  try {
    const user = await User.create({
      firstName: firstname,
      lastName: lastname,
      email: email,
      password: password,
    });
    if (user) {
      return res.send({ message: user });
    } else {
      return res.send({ message: "There is an error while creating user" });
    }
  } catch (error) {
    console.log(
      "Here I found Error while creating user in Database ====>" + error
    );
  }
};

export const findAllUser = async (req, res) => {
  try {
    const user = await User.find();
    if (user) {
      return res.send({ message: user });
    } else {
      return res.send({ message: "There is an error while Finding users" });
    }
  } catch (error) {
    console.log(
      "Here I found Error while creating user in Database ====>" + error
    );
  }
};

export const findUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({ _id: id });
    if (user) {
      return res.send({ message: user });
    } else {
      return res.send({ message: "There is an error while Finding users" });
    }
  } catch (error) {
    console.log(
      "Here I found Error while creating user in Database ====>" + error
    );
  }
};

export const deleteUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.deleteOne({ _id: id });
    if (user) {
      return res.send({ message: user });
    } else {
      return res.send({ message: "There is an error while Finding users" });
    }
  } catch (error) {
    console.log(
      "Here I found Error while creating user in Database ====>" + error
    );
  }
};

export const updateUser = async (req, res) => {
  const { id, firstname, lastname, email, password } = req.body;
  console.log(req.body);
  try {
    const user = await User.updateOne(
      { _id: id },
      {
        $set: {
          firstName: firstname,
          lastName: lastname,
          email: email,
          password: password,
        },
      }
    );
    if (user) {
      return res.send({ message: user });
    } else {
      return res.send({ message: "There is an error while updating User" });
    }
  } catch (error) {
    console.log(
      "Here I found Error while creating user in Database ====>" + error
    );
  }
};
