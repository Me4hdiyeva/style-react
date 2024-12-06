import React from 'react'

const LoginForm = () => {
  return (
    <>
    <div className="container pt-4 ">
    <div className="max-w-sm  mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-32  w-full bg-blue-400">
        <img
          src="https://avatars.mds.yandex.net/i?id=1705e1d13572486b3cdf39337e978232_l-4504218-images-thumbs&n=13"
          alt="background"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex justify-center -mt-16">
        <img
          className="h-24 w-24 rounded-full border-4 border-white object-cover"
          src="https://avatars.mds.yandex.net/i?id=cb994b00265d17e52ab886583f79a335cfa2ee3f-10449875-images-thumbs&n=13"
          alt="profile"
        />
      </div>
      <div className="text-center mt-2">
        <h2 className="text-lg font-semibold text-gray-800">Sarah Smith</h2>
        <p className="text-sm text-gray-600">Freelance Web Designer</p>
      </div>
      <div className="flex justify-around mt-4 text-gray-600">
        <div className="text-center flex gap-2">
          <span className="block text-lg font-semibold">2k</span>
          <span>
            <i class="fa-solid fa-star"></i>
          </span>
        </div>
        <div className="text-center flex gap-2">
          <span className="block text-lg font-semibold">10k</span>
          <span>
            <i class="fa-solid fa-person"></i>
          </span>
        </div>
        <div className="text-center flex gap-2">
          <span className="block text-lg font-semibold">15</span>
          <span>
            <i class="fa-solid fa-folder"></i>
          </span>
        </div>
      </div>
      <div className="mt-6 text-center pb-3">
        <button className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600">
          Follow
        </button>
      </div>
    </div>
    </div>
    </>
  )
}

export default LoginForm
