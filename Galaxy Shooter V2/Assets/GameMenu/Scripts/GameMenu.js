﻿#pragma strict

public class GameMenu extends MonoBehaviour {

	function onPlayButtonClicked() {
		SceneManagement.SceneManager.LoadScene("Play");
	}

	function onScoreboardButtonClicked() {
		SceneManagement.SceneManager.LoadScene("Scoreboard");
	}

	function onCreditsButtonClicked() {
		SceneManagement.SceneManager.LoadScene("Credits");
	}
}
