import { observable } from 'mobx';

export const store = observable({
  name: {'id': 0, 'wood': {}, 'format': {}, 'woodThirdPage': {}, 'formatThirdPage':{}, 'src': '', 'option':'', 'price': '', 'name': '', 'selected': false, 'description': ""},
  addSelected(value) {
    this.name = value;
  }
});
 

  