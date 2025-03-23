"use client"

export default function CustomerInfo() {

  return (
    <div className="flex flex-col text-white w-full">
      <div className="grid grid-cols-2 gap-x-1 gap-y-2">

        <div>
          <label htmlFor="name" className="block text-xs font-base">
            Name
          </label>
          <input
            id="name"
            name="name"
            className="w-full px-2 py-1 bg-s-grey-900 border border-s-grey-950 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-red-500"
          />
        </div>
        <div >
          <label htmlFor="surname" className="block text-xs font-base">
            Surname
          </label>
          <input
            id="surname"
            name="surname"
            className="w-full px-2 py-1 bg-s-grey-900 border border-s-grey-950 rounded-md text-white focus:outline-none"
          />
        </div>
        <div >
          <label htmlFor="sex" className="block text-xs font-base">
            Sex
          </label>
          <select
            id="sex"
            name="sex"
            className="w-full px-2 py-1 bg-s-grey-900 border border-s-grey-950 rounded-md text-white focus:outline-none appearance-none"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div >
          <label htmlFor="birthDate" className="block text-xs font-base">
            Birth Date
          </label>
          <input
            id="birthDate"
            name="birthDate"
            className="w-full px-2 py-1 bg-s-grey-900 border border-s-grey-950 rounded-md text-white focus:outline-none"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="passportId" className="block text-xs font-base">
            ID Card
          </label>
          <input
            id="passportId"
            name="passportId"
            className="w-full px-2 py-1 bg-s-grey-900 border border-s-grey-950 rounded-md text-white focus:outline-none"
          />
        </div>
        <div >
          <label htmlFor="telephone" className="block text-xs font-base">
            Telephone
          </label>
          <input
            id="telephone"
            name="telephone"
            className="w-full px-2 py-1 bg-s-grey-900 border border-s-grey-950 rounded-md text-white focus:outline-none"
          />

        </div>
        <div >
          <label htmlFor="email" className="block text-xs font-base">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full px-2 py-1 bg-s-grey-900 border border-s-grey-950 rounded-md text-white focus:outline-none"
          />
        </div>


      </div>
    </div>
  )
}

