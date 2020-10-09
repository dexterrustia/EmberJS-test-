import Model from "@ember-data/model";
import DS from "ember-data";

const { attr, hasMany } = DS;

export default class UserModel extends Model {
  post = hasMany("post");

  name = attr("string");
  username = attr("string");
  email = attr("string");
  phone = attr("string");
  website = attr("string");
}
