const props = withDefaults(
  defineProps<{
    msg?: string
  }>(),
  { msg: 'hello' }
)

export default () => {
  return <span>{props.msg}</span>
}
