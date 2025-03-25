"use client"

export default function CustomerInfo({ onChange, state }: { onChange: Function, state: CustomerForm }) {

  return (
    <div className="flex flex-col text-white w-full">
      <div className="grid grid-cols-2 gap-x-1 gap-y-2">

        <div>
          <label htmlFor="name" className="block text-xs font-base">
            Name
          </label>
          <input
            required
            onChange={(e) => onChange({ ...state, name: e.target.value })}
            id="name"
            name="name"
            value={state.name}
            className="w-full px-2 py-1 bg-s-grey-900 border border-s-grey-950 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-red-500"
          />
        </div>
        <div >
          <label htmlFor="surname" className="block text-xs font-base">
            Surname
          </label>
          <input
            required
            onChange={(e) => onChange({ ...state, surname: e.target.value })}
            id="surname"
            name="surname"
            value={state.surname}
            className="w-full px-2 py-1 bg-s-grey-900 border border-s-grey-950 rounded-md text-white focus:outline-none"
          />
        </div>
        <div >
          <label htmlFor="sex" className="block text-xs font-base">
            Sex
          </label>
          <select
            required
            onChange={(e) => onChange({ ...state, sex: e.target.value })}
            id="sex"
            name="sex"
            value={state.sex}
            className="w-full px-2 py-1 bg-s-grey-900 border border-s-grey-950 rounded-md text-white focus:outline-none appearance-none"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div >
          <label htmlFor="birthDate" className="block text-xs font-base">
            Birth Date
          </label>
          <input
            type="date"
            required
            onChange={(e) => onChange({ ...state, birthDate: e.target.value })}
            id="birthDate"
            name="birthDate"
            value={state.birthDate}
            className="w-full px-2 py-1 bg-s-grey-900 border border-s-grey-950 rounded-md text-white focus:outline-none"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="SSN" className="block text-xs font-base">
            ID Card
          </label>
          <input
            required
            onChange={(e) => onChange({ ...state, ssn: e.target.value })}

            id="SSN"
            name="SSN"
            value={state.ssn}

            className="w-full px-2 py-1 bg-s-grey-900 border border-s-grey-950 rounded-md text-white focus:outline-none"
          />
        </div>
        <div >
          <label htmlFor="telephone" className="block text-xs font-base">
            Telephone
          </label>
          <input
            required
            onChange={(e) => onChange({ ...state, tel: e.target.value })}

            id="telephone"
            name="telephone"
            value={state.tel}
            className="w-full px-2 py-1 bg-s-grey-900 border border-s-grey-950 rounded-md text-white focus:outline-none"
          />
        </div>
        <div >
          <label htmlFor="email" className="block text-xs font-base">
            Email
          </label>
          <input
            required
            onChange={(e) => onChange({ ...state, email: e.target.value })}

            id="email"
            name="email"
            type="email"
            value={state.email}
            className="w-full px-2 py-1 bg-s-grey-900 border border-s-grey-950 rounded-md text-white focus:outline-none"
          />
        </div>
      </div>
    </div>
  )
}

