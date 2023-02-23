import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

function login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e: any) => {
    console.log(email, password);
    await axios
      .post("http://127.0.0.1:8000/auth/token/jwt/create", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data["access"]);
        localStorage.setItem("access", res.data["access"]);
        localStorage.setItem("refresh", res.data["refresh"]);
        router.push("/");
      });
  };

  return (
    <div className="flex bg-black w-full h-screen items-center justify-center">
      <div className="w-1/5 h-3/5 bg-white rounded-xl p-2 flex flex-col items-center">
        <div className="w-full h-32 bg-black px-2 rounded-lg flex items-center justify-center text-white tracking-widest font-light">
          welcome!
        </div>
        <div className="flex flex-col w-full h-full items-center justify-around">
          <div className="w-full flex flex-col space-y-10 items-center">
            <input
              className="w-2/3 shadow-xl rounded p-2"
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              className="w-2/3 shadow-xl rounded p-2"
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div>
            <button
              type="button"
              onClick={(e) => login(e)}
              className="bg-black w-20 h-8 text-white rounded hover:bg-green-500 hover:text-black transform duration-200 transition-all font-medium tracking-widest"
            >
              Login!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
