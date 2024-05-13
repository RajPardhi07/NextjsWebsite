import React from 'react'

const page = () => {
  return (
    <div className='flex w-screen h-screen item-center justify-center'>
      <h1 className='text-4xl'>
        This is Activities page

        <div className="w-full h-screen bg-zinc-800 text-white">
      {/* {[Get in touch · 保持联系 · Ponerse en contacto · Neem contact op ·&nbsp;  ]}  */}

      <div className="w-full py-5 whitespace-nowrap overflow-hidden flex">
        <motion.div initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 15 }} 
        className="line text-9xl font-light tracking-tight">
          Get in touch · 保持联系 · Ponerse en contacto · Neem contact op ·&nbsp;

        </motion.div>

        <motion.div initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
         className="line text-9xl font-light tracking-tight">
          Get in touch · 保持联系 · Ponerse en contacto · Neem contact op ·&nbsp;

        </motion.div>

      </div>

    </div>
      </h1>
    </div>
  )
}

export default page
