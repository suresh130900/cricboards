import axios from "axios";
import React from "react";

export default function Signup() {
    const [signup, setSignup] = React.useState(null);

    const [name, setName] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);

    function createSignup() {
        const options = {
            method: 'POST',
            url: 'http://127.0.0.1:8000/user/signup',
            headers: {'Content-Type': 'application/json'},
            data: {name: name, email: email, password: password}
        };

        axios.request(options).then(function (response) {
            const data = JSON.parse(JSON.stringify(response.data))
            console.log(data.error)
            if (data.error === false)
            {
                window.location.href = "/App"
            }
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

    }
    return (
        <>
            <div className="flex min-h-full flex-1">
                <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                        <div>
                            <img
                                className="h-10 w-auto"
                                src="/logo.png"
                                alt="Your Company"
                            />
                            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Create your account
                            </h2>
                        </div>

                        <div className="mt-10">
                            <div>
                                <div className="space-y-6">
                                    <div>
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                            Name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                autoComplete="name"
                                                required
                                                onChange={(e) => {
                                                    setName(e.target.value)
                                                    console.log(name)
                                                }}
                                                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>


                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Email address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                required
                                                onChange={(e) => {
                                                    setEmail(e.target.value)
                                                    console.log(email)
                                                }}
                                                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                            Password
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                autoComplete="current-password"
                                                required
                                                onChange={(e) => {
                                                    setPassword(e.target.value)
                                                    console.log(password)
                                                }}
                                                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <p className="mt-2 text-sm leading-6 text-gray-500">
                                        Already a member?{' '}
                                        <a href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                           Login
                                        </a>
                                    </p>

                                    <div>
                                        <button
                                            onClick={createSignup}
                                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                            Sign in
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative hidden w-0 flex-1 lg:block">
                    <img
                        className="absolute inset-0 h-screen w-full object-cover"
                        src="/pxfuel.jpg"
                        alt=""
                    />
                </div>
            </div>
        </>
    )
}
