import facebookIcon from '@/assets/svg/icon-facebook.svg';
import mediumIcon from '@/assets/svg/icon-medium.svg';

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App TestComponent',
      facebookIcon: `<svg class="icon-facebook" viewBox="${facebookIcon.viewBox}"><use xlink:href="#${facebookIcon.id}" /></svg>`,
      mediumIcon: `<svg class="icon-medium" viewBox="${mediumIcon.viewBox}"><use xlink:href="#${mediumIcon.id}" /></svg>`
    }
  }
}
