

export default function Container(props:any) {
  return (
    <div {...props} className={"container max-w-[1080px] m-auto p-2 "+(props.className??"") }>
      {props.children}
    </div>
  )
}
