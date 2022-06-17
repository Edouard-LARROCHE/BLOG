const UserModel = require('../models/user');
const ObjectID = require('mongoose').Types.ObjectId;

const getSingleUser = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const user = await UserModel.findById(_id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const getAllUsers = async (req, res) => {
  const users = await UserModel.find();
  res.status(200).json(users);
};

const userInfo = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) return res.status(400).send('ID unknown : ' + req.params.id);

  UserModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log('ID unknown : ' + err);
  }).select('-password');
};

const updateUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id)) return res.status(400).send('ID unknown : ' + req.params.id);

  try {
    await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          bio: req.body.bio,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true },
    )
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const deleteUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id)) return res.status(400).send('ID unknown : ' + req.params.id);

  try {
    await UserModel.remove({ _id: req.params.id }).exec();
    res.status(200).json({ message: 'Successfully deleted. ' });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const follow = async (req, res) => {
  if (!ObjectID.isValid(req.params.id) || !ObjectID.isValid(req.body.idToFollow)) return res.status(400).send('ID unknown : ' + req.params.id);

  try {
    UserModel.findByIdAndUpdate(req.params.id, { $addToSet: { following: req.body.idToFollow } }, { new: true, upsert: true })
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err })),
      await UserModel.findByIdAndUpdate(req.body.idToFollow, { $addToSet: { followers: req.params.id } }, { new: true, upsert: true });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};

const unfollow = async (req, res) => {
  if (!ObjectID.isValid(req.params.id) || !ObjectID.isValid(req.body.idToUnfollow)) return res.status(400).send('ID unknown : ' + req.params.id);

  try {
    UserModel.findByIdAndUpdate(req.params.id, { $pull: { following: req.body.idToUnfollow } }, { new: true, upsert: true })
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err })),
      await UserModel.findByIdAndUpdate(req.body.idToUnfollow, { $pull: { followers: req.params.id } }, { new: true, upsert: true });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

module.exports = { getSingleUser, getAllUsers, userInfo, updateUser, deleteUser, follow, unfollow };
