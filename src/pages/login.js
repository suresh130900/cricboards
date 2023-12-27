import axios from "axios";
import React from "react";


export default function Login() {
    const [login, setLogin] = React.useState(null);

    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);

    function createLogin() {
        const options = {
            method: 'POST',
            url: 'http://127.0.0.1:8000/user/login',
            headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.3.0'},
            data: {email:email, password: password}
        };

        axios.request(options).then(function (response) {
            const data = JSON.parse(JSON.stringify(response.data))
            console.log(data.error)
            if (data.error === false)
            {
                window.location.href = "/powerbi"
            }
        }).catch(function (error) {
            console.error(error);
        });
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="/logo.png"
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="space-y-6">
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
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={(e) => {
                                setEmail(e.target.value)
                                console.log(email)
                            }}
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            onChange={(e) => {
                                setPassword(e.target.value)
                                console.log(email)
                            }}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                        Not a member?{' '}
                        <a href="/Signup" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Signup
                        </a>
                    </p>

                <div>
                    <button
                        onClick={createLogin}
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Sign in
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
}