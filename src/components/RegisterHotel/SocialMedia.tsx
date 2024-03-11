import Image from "next/image"
import images from "../../assets"
import TextEditor from "../Inputs/TextEditor"



const items = [
  {
    icon:images.s_google,
    placeholder:"google"
  },
  {
    icon:images.s_facebook,
    placeholder:"facebook"
  },
  {
    icon:images.s_instagram,
    placeholder:"instagram"
  },
  {
    icon:images.s_x,
    placeholder:"x"
  },
  {
    icon:images.s_linkdin,
    placeholder:"linkdin"
  },
  {
    icon:images.s_youtube,
    placeholder:"youtube"
  }
]
export default function SocialMedia() {
  return (
    <div>
      <h1 className="text-blue-700  font-bold text-xl">
        Social media
      </h1>
      <div className="text-xl mt-4 mb-6">
        <span className="font-bold me-2">
          Add social media links
        </span>
        (optional)
      </div>
      <form>
        <div className="grid grid-cols-1  gap-4 pt-3 ">
          {
            items.map((el, k) => {
              return <div className="flex items-center" key={k}>
                <Image src={el.icon} className="h-10" alt="" />
                <div className="me-4"></div>
                <TextEditor
                  hideLabel={true}
                  label="Travel category"
                  placeholder={el.placeholder}
                  value=""
                  className="grow"
                  onChange={() => { }}
                />
              </div>
            })
          }
        </div>
      </form>
    </div>
  )
}
