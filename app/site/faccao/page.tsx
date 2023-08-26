import Image from "next/image"

export default function FaccaoPage() {
    return (
      <>
        <div className="flex bg-gray-700  h-screen">
          <div className="flex-grow text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
            <div>
              <Image
                src="/logo.png"
                width={550}
                height={550}
                alt="Picture of the author"
              />

            </div>
          </div>

        </div>



      </>
  )
}
