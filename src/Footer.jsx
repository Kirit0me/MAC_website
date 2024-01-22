import git from "./img/github.svg"
import insta from "./img/instagram.svg"

export default function Footer() {
    return (
        <div className="bg-footer text-cyan-200 flex-col flex justify-center align-middle py-2">
            <h1 className="p-4 text-xl font-bold text-center"> Links to Stuff </h1>
            <div className="flex flex-row justify-center">
                <a href="https://github.com/Kirit0me/MAC_website" className="flex rounded-xl"><img src={git} className="h-14 w-14 p-2"></img></a>
                <a href="https://www.instagram.com/macmanipal/" className="flex rounded-xl"><img src={insta} className="h-14 w-14 p-2"></img></a>
            </div>
        </div>
    )
}