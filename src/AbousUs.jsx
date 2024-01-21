import Navigation_Bar from "./navigation_bar"

function AboutUs() {
    return(
        <div className="h-screen bg-oshi-no-ko bg-cover flex-col">
            <Navigation_Bar />
            <div className="pt-16">
            <h1 class ="text-center p-4 pt-8 text-5xl rounded-3xl">
                <div className="bg-transparent backdrop-blur-lg border-4 border-slate-400 rounded-3xl p-6 ">
                <span className="bg-clip-text font-semibold text-transparent bg-gradient-to-r from-fuchsia-400 to-purple-400">About Us</span>
                </div>
            </h1>
            <div className="p-4">
                <div className="bg-transparent border-2 backdrop-blur-lg border-slate-300 p-6 rounded-3xl">
                    <p className="text-xl text-transparent bg-clip-text bg-fuchsia-300">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AboutUs 