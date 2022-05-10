import { Spacer } from "@chakra-ui/react";
import FeatureProject from "@components/project/featureProject";
import Project from "@components/project/project";
import type { NextPage } from "next";

const Projects: NextPage = () => {
	return (
		<main>
			<FeatureProject
				image="/Highlight-inator.svg"
				title="Highlight-inator"
				description="A web app to automatically create short highlight videos from Twitch live stream vods. Targeted at small streamers to help grow thier audience. (demo disabled due to hosting costs)"
				githubLink="https://github.com/auto-highlighter"
				techStack={["ASP.NET 7", "Rust", "React", "Gstreamer"]}
			/>
			<Project
				image="/losing-the-lyrics-proj.png"
				title="Losing The Lyrics"
				description="A web based jackbox style game inspired by the 2007 tv show 'Don't Forget The Lyrics'. Powered by React with Next.js, Socket.io, and Spotify Web Playback SDK."
				githubLink="https://github.com/RyanCallahan312/losing-the-lyrics"
				demoLink="http://losing-the-lyrics.devryan.io/"
				techStack={["React", "Next.js", "Socket.io"]}
			/>
			<Spacer />
			<Project
				image="/chat-app-proj.png"
				title="Chat App Demo"
				description="A chat app designed as a code-along for a 40 minute computer science club demo. Powered by React with Next.js and Socket.io this lets anyone send messages to a global chat room!"
				githubLink="https://github.com/RyanCallahan312/chat-app"
				demoLink="http://chat-room.bsucomputerscienceclub.com/"
				techStack={["React", "Next.js", "Socket.io"]}
				reverse
			/>
			<Spacer />
			<Project
				image="/react-hangman-optimised.png"
				title="React Hangman"
				description="The classic hangman game built with React. Includes two modes. One is the standard game, and the other is a predictive mode where the user gives a word and the game will guess it!"
				githubLink="https://github.com/RyanCallahan312/React-Hangman"
				demoLink="https://hangman.devryan.io/"
				techStack={["React"]}
			/>
		</main>
	);
};

export default Projects;
