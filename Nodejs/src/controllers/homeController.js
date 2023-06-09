import { json } from "body-parser";
import db from "../models/index";
import CRUDService from "../services/CRUDService";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};

let getCRUD = async (req, res) => {
  return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  console.log(message);
  return res.send("post crud from server");
};

let displaygetCRUD = async (req, res) => {
  let data = await CRUDService.getAllUser();

  return res.render("displayCRUD.ejs", {
    dataTable: data,
  });
};

let getEditCRUD = async (req, res) => {
  let userId = req.query.id;
  console.log(userId);
  if (userId) {
    let userData = await CRUDService.getUserInfoById(userId);
    // check

    return res.render("editCRUD.ejs", {
      user: userData,
    });
  } else {
    return res.send("Users not found");
  }
};

let putCRUD = async (req, res) => {
  let data = req.body;
  let allUsers = await CRUDService.updateUserData(data);
  return res.render("displayCRUD.ejs", {
    dataTable: allUsers,
  });
};

let getDeleteCRUD = async (req, res) => {
  let userId = req.query.id;
  console.log(userId);
  if (userId) {
    await CRUDService.deleteUserInfoById(userId);
    return res.send("Delete user success!");
  } else {
    return res.send("User not found!");
  }
};

module.exports = {
  getHomePage: getHomePage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displaygetCRUD: displaygetCRUD,
  getEditCRUD: getEditCRUD,
  getDeleteCRUD: getDeleteCRUD,
  putCRUD: putCRUD,
};
