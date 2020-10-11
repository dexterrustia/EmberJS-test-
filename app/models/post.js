import Model,{ attr } from "@ember-data/model"; 

export default class PostModel extends Model { 
  title = attr("string");
  body = attr("string");
}
