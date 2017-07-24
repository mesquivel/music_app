export default {
  name: 'hello',
  data () {
    return {
      msg: `"${ this.$route.path }" Page Not Found`
    }
  }
}
