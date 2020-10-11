import DS from 'ember-data'; 

// export default class PostSerializer extends DS.RESTSerializer {
//   normalizeResponse(store, primaryModelClass, payload, id, requestType){
//     payload = { post: payload };
//     console.log(payload)

//     return this._super(store, primaryModelClass, payload, id, requestType);
//   }
// }

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType){
    payload = { post: payload };
    console.log(payload)

    return this._super(store, primaryModelClass, payload, id, requestType);
  }
})