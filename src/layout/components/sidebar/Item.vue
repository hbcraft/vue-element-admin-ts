<script>
export default {
  name: 'Item',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    iconSize: {
      type: String,
      default: '1x'
    },
    fontSize: {
      type: String,
      default: '16px'
    }
  },
  render (h, context) {
    const { icon, title, iconSize, fontSize } = context.props
    const vnodes = []

    if (icon) {
      if (icon.includes('el-icon')) {
        vnodes.push(<i class={[icon, 'mr-10']} />)
      } else {
        vnodes.push(<fa-icon icon={icon} class="mr-10" size={iconSize} />)
      }
    }

    if (title) {
      vnodes.push(<span slot='title' style={{ fontSize }}>{(title)}</span>)
    }
    return vnodes
  }
}
</script>
