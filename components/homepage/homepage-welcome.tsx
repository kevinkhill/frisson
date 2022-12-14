import { CollaboratingTeam, ConnectedWorld } from "@components/undraw";

import { SITE_TITLE } from "../../pages/index";

export default function HomepageWelcomeSection() {
  return (
    <div className="container max-w-5xl mx-auto m-8">
      <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        Welcome to {SITE_TITLE}
      </h2>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-5/6 sm:w-1/2 p-6">
          <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc
            commodo posuere et sit amet ligula.
            <br />
            <br />
            Images from:
            <a className="text-[#ff58ae] underline" href="https://undraw.co/">
              undraw.co
            </a>
          </p>
        </div>
        <div className="w-full sm:w-1/2 p-6">
          <CollaboratingTeam accentColor="#9c00c8" />
        </div>
      </div>
      <div className="flex flex-wrap flex-col-reverse sm:flex-row">
        <div className="w-full sm:w-1/2 p-6 mt-6">
          <ConnectedWorld accentColor="#ff58ae" />
        </div>
        <div className="w-full sm:w-1/2 p-6 mt-6">
          <div className="align-middle">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Lorem ipsum dolor sit amet
            </h3>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc
              commodo posuere et sit amet ligula.
              <br />
              <br />
              Images from:
              <a className="text-pink-500 underline" href="https://undraw.co/">
                undraw.co
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
