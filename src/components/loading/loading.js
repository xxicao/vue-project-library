import Loading from './index.vue'
export default (Vue) => {
  const vm  = Vue.extend(Loading);
  const Profile = new vm({
      el: document.createElement('div'),
  });
  const methods = {
    show(object) {
        Profile.show = true;
        if(object && object.text){
          Profile.text = object.text;
        }
        if(object && object.bgColor){
          Profile.bgColor = object.bgColor;
        }
        document.body.appendChild(Profile.$el);
    },
    hide() {
        Profile.show = false;
    }
  };
  Vue.prototype.$loading = methods;
}