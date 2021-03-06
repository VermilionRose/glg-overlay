//calling all necessary Replicants

//instantiating event and host information
const eventName = nodecg.Replicant('eventName');
const hostName = nodecg.Replicant('hostName');
const hostLogo = nodecg.Replicant('hostLogo');

//caster names
const casterLeft = nodecg.Replicant('casterLeft');
const casterRight = nodecg.Replicant('casterRight');

//team names + acronym
const team1Name = nodecg.Replicant('team1Name');
const team2Name = nodecg.Replicant('team2Name');
const team1Acronym = nodecg.Replicant('team1Acronym');
const team2Acronym = nodecg.Replicant('team2Acronym');

//team colors
const team1Color = nodecg.Replicant('team1Color');
const team2Color = nodecg.Replicant('team2Color');

//team logos
const team1Logo = nodecg.Replicant('team1Logo');
const team2Logo = nodecg.Replicant('team2Logo');

//team sides
const sideSwitch = nodecg.Replicant('sideSwitch');

//map count (Bo1 or Bo3)
const mapCount = nodecg.Replicant('mapCount');

//team series score
const team1SeriesScore = nodecg.Replicant('team1SeriesScore');
const team2SeriesScore = nodecg.Replicant('team2SeriesScore');

//team map score
const team1MapScore = nodecg.Replicant('team1MapScore');
const team2MapScore = nodecg.Replicant('team2MapScore');

//team side swap on the controller
const teamSideSwapBoolean = nodecg.Replicant('TeamSideSwapBoolean');

//map picks (ascent, bind, breeze, haven, icebox, split)
const map1 = nodecg.Replicant('map1');
const map2 = nodecg.Replicant('map2');
const map3 = nodecg.Replicant('map3');
const map4 = nodecg.Replicant('map4');
const map5 = nodecg.Replicant('map5');

//map wins (team1, team2)
const map1Winner = nodecg.Replicant('map1Winner');
const map2Winner = nodecg.Replicant('map2Winner');
const map3Winner = nodecg.Replicant('map3Winner');
const map4Winner = nodecg.Replicant('map4Winner');
const map5Winner = nodecg.Replicant('map5Winner');

//map scores
const map1Score = nodecg.Replicant('map1Score');
const map2Score = nodecg.Replicant('map2Score');
const map3Score = nodecg.Replicant('map3Score');
const map4Score = nodecg.Replicant('map4Score');
const map5Score = nodecg.Replicant('map5Score');

//extra HUD Overlay
const extraBoolean = nodecg.Replicant('ExtraBoolean');

//simple Replicator checking for changes

eventName.on('change', value => {
    document.getElementById('event-name').innerHTML = value;
});

hostName.on('change', value => {
    document.getElementById('host-name').innerHTML = value;
});

casterLeft.on('change', value => {
    document.getElementById('caster-left').innerHTML = value;
});

casterRight.on('change', value => {
    document.getElementById('caster-right').innerHTML = value;
});

team1Acronym.on('change', value => {
    document.getElementById('left-team-name-extra').innerHTML = value;
    document.getElementById('right-team-name-extra-swapped').innerHTML = value;
});

team2Acronym.on('change', value => {
    document.getElementById('right-team-name-extra').innerHTML = value;
    document.getElementById('left-team-name-extra-swapped').innerHTML = value;
});

team1Name.on('change', value => {
    document.getElementById('left-team-name').innerHTML = value;
    document.getElementById('right-team-name-swapped').innerHTML = value;
});

team2Name.on('change', value => {
    document.getElementById('right-team-name').innerHTML = value;
    document.getElementById('left-team-name-swapped').innerHTML = value;
});

team1Color.on('change', value => {
    document.getElementById('left-team-banner').style.backgroundColor = value;
    document.getElementById('left-team-score-mode').style.color = value;

    document.getElementById('right-team-banner-swapped').style.backgroundColor = value;
    document.getElementById('right-team-score-mode-swapped').style.color = value;

    document.getElementById('left-team-color-extra').style.backgroundColor = value;
    document.getElementById('left-team-mode-extra').style.color = value;
    document.getElementById('left-team-score-extra').style.color = value;

    document.getElementById('right-team-color-extra-swapped').style.backgroundColor = value;
    document.getElementById('right-team-mode-extra-swapped').style.color = value;
    document.getElementById('right-team-score-extra-swapped').style.color = value;
});

team2Color.on('change', value => {
    document.getElementById('right-team-banner').style.backgroundColor = value;
    document.getElementById('right-team-score-mode').style.color = value;

    document.getElementById('left-team-banner-swapped').style.backgroundColor = value;
    document.getElementById('left-team-score-mode-swapped').style.color = value;

    document.getElementById('right-team-color-extra').style.backgroundColor = value;
    document.getElementById('right-team-mode-extra').style.color = value;
    document.getElementById('right-team-score-extra').style.color = value;

    document.getElementById('left-team-color-extra-swapped').style.backgroundColor = value;
    document.getElementById('left-team-mode-extra-swapped').style.color = value;
    document.getElementById('left-team-score-extra-swapped').style.color = value;
});

team1Logo.on('change', value => {
    document.getElementById('left-team-logo').src = value;
    document.getElementById('right-team-logo-swapped').src = value;

    document.getElementById('left-team-logo-extra').src = value;
    document.getElementById('right-team-logo-extra-swapped').src = value;
});

team2Logo.on('change', value => {
    document.getElementById('right-team-logo').src = value;
    document.getElementById('left-team-logo-swapped').src = value;

    document.getElementById('right-team-logo-extra').src = value;
    document.getElementById('left-team-logo-extra-swapped').src = value;
});

sideSwitch.on('change', value => {
    if (value == 0) {
        document.getElementById('left-team-mode').innerHTML = 'DEF';
        document.getElementById('right-team-mode').innerHTML = 'ATK';

        document.getElementById('left-team-mode-swapped').innerHTML = 'DEF';
        document.getElementById('right-team-mode-swapped').innerHTML = 'ATK';

        document.getElementById('left-team-mode-extra').innerHTML = 'DEFENSE';
        document.getElementById('right-team-mode-extra').innerHTML = 'ATTACK';

        document.getElementById('left-team-mode-extra-swapped').innerHTML = 'DEFENSE';
        document.getElementById('right-team-mode-extra-swapped').innerHTML = 'ATTACK';
        return;
    }
    document.getElementById('left-team-mode').innerHTML = 'ATK';
    document.getElementById('right-team-mode').innerHTML = 'DEF';

    document.getElementById('left-team-mode-swapped').innerHTML = 'ATK';
    document.getElementById('right-team-mode-swapped').innerHTML = 'DEF';

    document.getElementById('left-team-mode-extra').innerHTML = 'ATTACK';
    document.getElementById('right-team-mode-extra').innerHTML = 'DEFENSE';

    document.getElementById('left-team-mode-extra-swapped').innerHTML = 'ATTACK';
    document.getElementById('right-team-mode-extra-swapped').innerHTML = 'DEFENSE';
});

teamSideSwapBoolean.on('change', value => {
    if (value == 0) {
        document.getElementById('header').style.display = "initial";
        document.getElementById('header-swapped').style.display = "none";
        document.getElementById('hud-extra-header').style.display = "flex";
        document.getElementById('hud-extra-header-swapped').style.display = "none";
        return;
    }

    document.getElementById('header').style.display = "none";
    document.getElementById('header-swapped').style.display = "initial";
    document.getElementById('hud-extra-header').style.display = "none";
    document.getElementById('hud-extra-header-swapped').style.display = "flex";
});

//more complicated Replicant change trackers

mapCount.on('change', value => {
    var leftMapTicks = document.getElementById('left-map-ticks').children;
    var rightMapTicks = document.getElementById('right-map-ticks').children;
    var leftMapTicksSwapped = document.getElementById('left-map-ticks-swapped').children;
    var rightMapTicksSwapped = document.getElementById('right-map-ticks-swapped').children;

    var leftMapTicksExtra = document.getElementById('left-map-ticks-extra').children;
    var rightMapTicksExtra = document.getElementById('right-map-ticks-extra').children;
    var leftMapTicksExtraSwapped = document.getElementById('left-map-ticks-extra-swapped').children;
    var rightMapTicksExtraSwapped = document.getElementById('right-map-ticks-extra-swapped').children;

    var mapList = document.getElementById('maps').children;
    
    if (value == 3) {
		leftMapTicks[0].style.display = 'flex';
		leftMapTicks[1].style.display = 'flex';
        leftMapTicks[2].style.display = 'none';
        rightMapTicks[0].style.display = 'flex';
		rightMapTicks[1].style.display = 'flex';
		rightMapTicks[2].style.display = 'none';

        leftMapTicksSwapped[0].style.display = 'flex';
		leftMapTicksSwapped[1].style.display = 'flex';
        leftMapTicksSwapped[2].style.display = 'none';
        rightMapTicksSwapped[0].style.display = 'flex';
		rightMapTicksSwapped[1].style.display = 'flex';
		rightMapTicksSwapped[2].style.display = 'none';
		
        leftMapTicksExtra[0].style.display = 'flex';
		leftMapTicksExtra[1].style.display = 'flex';
        leftMapTicksExtra[2].style.display = 'none';
        rightMapTicksExtra[0].style.display = 'flex';
		rightMapTicksExtra[1].style.display = 'flex';
		rightMapTicksExtra[2].style.display = 'none';

        leftMapTicksExtraSwapped[0].style.display = 'flex';
		leftMapTicksExtraSwapped[1].style.display = 'flex';
        leftMapTicksExtraSwapped[2].style.display = 'none';
        rightMapTicksExtraSwapped[0].style.display = 'flex';
		rightMapTicksExtraSwapped[1].style.display = 'flex';
		rightMapTicksExtraSwapped[2].style.display = 'none';

        document.getElementById('left-map-ticks').style.justifyContent = 'space-evenly';
        document.getElementById('right-map-ticks').style.justifyContent = 'space-evenly';
        mapList[0].style.width = '33.3%';
        mapList[1].style.width = '33.3%';
        mapList[2].style.width = '33.4%';
		mapList[3].style.width = '0%';
		mapList[4].style.width = '0%';
        document.getElementsByClassName('map-information')[0].style.width = '90%'
        return;
    }
	
	if (value == 5) {
		leftMapTicks[0].style.display = 'flex';
		leftMapTicks[1].style.display = 'flex';
        leftMapTicks[2].style.display = 'flex';
        rightMapTicks[0].style.display = 'flex';
		rightMapTicks[1].style.display = 'flex';
		rightMapTicks[2].style.display = 'flex';

        leftMapTicksSwapped[0].style.display = 'flex';
		leftMapTicksSwapped[1].style.display = 'flex';
        leftMapTicksSwapped[2].style.display = 'flex';
        rightMapTicksSwapped[0].style.display = 'flex';
		rightMapTicksSwapped[1].style.display = 'flex';
		rightMapTicksSwapped[2].style.display = 'flex';
		
        leftMapTicksExtra[0].style.display = 'flex';
		leftMapTicksExtra[1].style.display = 'flex';
        leftMapTicksExtra[2].style.display = 'flex';
        rightMapTicksExtra[0].style.display = 'flex';
		rightMapTicksExtra[1].style.display = 'flex';
		rightMapTicksExtra[2].style.display = 'flex';

        leftMapTicksExtraSwapped[0].style.display = 'flex';
		leftMapTicksExtraSwapped[1].style.display = 'flex';
        leftMapTicksExtraSwapped[2].style.display = 'flex';
        rightMapTicksExtraSwapped[0].style.display = 'flex';
		rightMapTicksExtraSwapped[1].style.display = 'flex';
		rightMapTicksExtraSwapped[2].style.display = 'flex';

        document.getElementById('left-map-ticks').style.justifyContent = 'space-evenly';
        document.getElementById('right-map-ticks').style.justifyContent = 'space-evenly';
        mapList[0].style.width = '20%';
        mapList[1].style.width = '20%';
        mapList[2].style.width = '20%';
		mapList[3].style.width = '20%';
		mapList[4].style.width = '20%';
        document.getElementsByClassName('map-information')[0].style.width = '90%'
        return;
    }

    leftMapTicks[0].style.display = 'flex';
	leftMapTicks[1].style.display = 'none';
	leftMapTicks[2].style.display = 'none';
	rightMapTicks[0].style.display = 'flex';
	rightMapTicks[1].style.display = 'none';
	rightMapTicks[2].style.display = 'none';

    leftMapTicksSwapped[0].style.display = 'flex';
	leftMapTicksSwapped[1].style.display = 'none';
	leftMapTicksSwapped[2].style.display = 'none';
	rightMapTicksSwapped[0].style.display = 'flex';
	rightMapTicksSwapped[1].style.display = 'none';
	rightMapTicksSwapped[2].style.display = 'none';
	
	leftMapTicksExtra[0].style.display = 'flex';
	leftMapTicksExtra[1].style.display = 'none';
	leftMapTicksExtra[2].style.display = 'none';
	rightMapTicksExtra[0].style.display = 'flex';
	rightMapTicksExtra[1].style.display = 'none';
	rightMapTicksExtra[2].style.display = 'none';

    leftMapTicksExtraSwapped[0].style.display = 'flex';
	leftMapTicksExtraSwapped[1].style.display = 'none';
	leftMapTicksExtraSwapped[2].style.display = 'none';
	rightMapTicksExtraSwapped[0].style.display = 'flex';
	rightMapTicksExtraSwapped[1].style.display = 'none';
	rightMapTicksExtraSwapped[2].style.display = 'none';

	document.getElementById('left-map-ticks').style.justifyContent = 'space-evenly';
	document.getElementById('right-map-ticks').style.justifyContent = 'space-evenly';
	mapList[0].style.width = '100%';
	mapList[1].style.width = '0%';
	mapList[2].style.width = '0%';
	mapList[3].style.width = '0%';
	mapList[4].style.width = '0%';
	document.getElementsByClassName('map-information')[0].style.width = '95%'
});

hostLogo.on('change', value => {
    document.getElementById('host-logo').src = value;
});

team1SeriesScore.on('change', value => {
    var leftMapTicks = document.getElementById('left-map-ticks').children;
    var leftMapTicksSwapped = document.getElementById('right-map-ticks-swapped').children;
    var leftMapTicksExtra = document.getElementById('left-map-ticks-extra').children;
    var leftMapTicksExtraSwapped = document.getElementById('right-map-ticks-extra-swapped').children;

    if (value == 0) {
        leftMapTicks[0].style.backgroundColor = 'rgba(0,0,0,.25)';
        leftMapTicks[1].style.backgroundColor = 'rgba(0,0,0,.25)';
		leftMapTicks[2].style.backgroundColor = 'rgba(0,0,0,.25)';

        leftMapTicksSwapped[0].style.backgroundColor = 'rgba(0,0,0,.25)';
        leftMapTicksSwapped[1].style.backgroundColor = 'rgba(0,0,0,.25)';
		leftMapTicksSwapped[2].style.backgroundColor = 'rgba(0,0,0,.25)';
		
		leftMapTicksExtra[0].style.backgroundColor = 'rgba(0,0,0,.25)';
        leftMapTicksExtra[1].style.backgroundColor = 'rgba(0,0,0,.25)';
		leftMapTicksExtra[2].style.backgroundColor = 'rgba(0,0,0,.25)';

        leftMapTicksExtraSwapped[0].style.backgroundColor = 'rgba(0,0,0,.25)';
        leftMapTicksExtraSwapped[1].style.backgroundColor = 'rgba(0,0,0,.25)';
		leftMapTicksExtraSwapped[2].style.backgroundColor = 'rgba(0,0,0,.25)';
    } else if (value == 1) {
		leftMapTicks[0].style.backgroundColor = 'rgba(255,255,255,1)';
        leftMapTicks[1].style.backgroundColor = 'rgba(0,0,0,.25)';
		leftMapTicks[2].style.backgroundColor = 'rgba(0,0,0,.25)';

        leftMapTicksSwapped[0].style.backgroundColor = 'rgba(255,255,255,1)';
        leftMapTicksSwapped[1].style.backgroundColor = 'rgba(0,0,0,.25)';
		leftMapTicksSwapped[2].style.backgroundColor = 'rgba(0,0,0,.25)';
		
		leftMapTicksExtra[0].style.backgroundColor = 'rgba(255,255,255,1)';
        leftMapTicksExtra[1].style.backgroundColor = 'rgba(0,0,0,.25)';
		leftMapTicksExtra[2].style.backgroundColor = 'rgba(0,0,0,.25)';

        leftMapTicksExtraSwapped[0].style.backgroundColor = 'rgba(255,255,255,1)';
        leftMapTicksExtraSwapped[1].style.backgroundColor = 'rgba(0,0,0,.25)';
		leftMapTicksExtraSwapped[2].style.backgroundColor = 'rgba(0,0,0,.25)';
    } else if (value == 2) {
        leftMapTicks[0].style.backgroundColor = 'rgba(255,255,255,1)';
        leftMapTicks[1].style.backgroundColor = 'rgba(255,255,255,1)';
		leftMapTicks[2].style.backgroundColor = 'rgba(0,0,0,.25)';

        leftMapTicksSwapped[0].style.backgroundColor = 'rgba(255,255,255,1)';
        leftMapTicksSwapped[1].style.backgroundColor = 'rgba(255,255,255,1)';
		leftMapTicksSwapped[2].style.backgroundColor = 'rgba(0,0,0,.25)';
		
		leftMapTicksExtra[0].style.backgroundColor = 'rgba(255,255,255,1)';
        leftMapTicksExtra[1].style.backgroundColor = 'rgba(255,255,255,1)';
		leftMapTicksExtra[2].style.backgroundColor = 'rgba(0,0,0,.25)';

        leftMapTicksExtraSwapped[0].style.backgroundColor = 'rgba(255,255,255,1)';
        leftMapTicksExtraSwapped[1].style.backgroundColor = 'rgba(255,255,255,1)';
		leftMapTicksExtraSwapped[2].style.backgroundColor = 'rgba(0,0,0,.25)';
    } else {
		leftMapTicks[0].style.backgroundColor = 'rgba(255,255,255,1)';
        leftMapTicks[1].style.backgroundColor = 'rgba(255,255,255,1)';
		leftMapTicks[2].style.backgroundColor = 'rgba(255,255,255,1)';

        leftMapTicksSwapped[0].style.backgroundColor = 'rgba(255,255,255,1)';
        leftMapTicksSwapped[1].style.backgroundColor = 'rgba(255,255,255,1)';
		leftMapTicksSwapped[2].style.backgroundColor = 'rgba(255,255,255,1)';
		
		leftMapTicksExtra[0].style.backgroundColor = 'rgba(255,255,255,1)';
        leftMapTicksExtra[1].style.backgroundColor = 'rgba(255,255,255,1)';
		leftMapTicksExtra[2].style.backgroundColor = 'rgba(255,255,255,1)';

        leftMapTicksExtraSwapped[0].style.backgroundColor = 'rgba(255,255,255,1)';
        leftMapTicksExtraSwapped[1].style.backgroundColor = 'rgba(255,255,255,1)';
		leftMapTicksExtraSwapped[2].style.backgroundColor = 'rgba(255,255,255,1)';
	}
});

team2SeriesScore.on('change', value => {
    var rightMapTicks = document.getElementById('right-map-ticks').children;
    var rightMapTicksSwapped = document.getElementById('left-map-ticks-swapped').children;
    var rightMapTicksExtra = document.getElementById('right-map-ticks-extra').children;
    var rightMapTicksExtraSwapped = document.getElementById('left-map-ticks-extra-swapped').children;

    if (value == 0) {
        rightMapTicks[0].style.backgroundColor = 'rgba(0,0,0,.25)';
        rightMapTicks[1].style.backgroundColor = 'rgba(0,0,0,.25)';
		rightMapTicks[2].style.backgroundColor = 'rgba(0,0,0,.25)';

        rightMapTicksSwapped[0].style.backgroundColor = 'rgba(0,0,0,.25)';
        rightMapTicksSwapped[1].style.backgroundColor = 'rgba(0,0,0,.25)';
		rightMapTicksSwapped[2].style.backgroundColor = 'rgba(0,0,0,.25)';
		
		rightMapTicksExtra[0].style.backgroundColor = 'rgba(0,0,0,.25)';
        rightMapTicksExtra[1].style.backgroundColor = 'rgba(0,0,0,.25)';
		rightMapTicksExtra[2].style.backgroundColor = 'rgba(0,0,0,.25)';

        rightMapTicksExtraSwapped[0].style.backgroundColor = 'rgba(0,0,0,.25)';
        rightMapTicksExtraSwapped[1].style.backgroundColor = 'rgba(0,0,0,.25)';
		rightMapTicksExtraSwapped[2].style.backgroundColor = 'rgba(0,0,0,.25)';
    } else if (value == 1) {
		rightMapTicks[0].style.backgroundColor = 'rgba(255,255,255,1)';
        rightMapTicks[1].style.backgroundColor = 'rgba(0,0,0,.25)';
		rightMapTicks[2].style.backgroundColor = 'rgba(0,0,0,.25)';

        rightMapTicksSwapped[0].style.backgroundColor = 'rgba(255,255,255,1)';
        rightMapTicksSwapped[1].style.backgroundColor = 'rgba(0,0,0,.25)';
		rightMapTicksSwapped[2].style.backgroundColor = 'rgba(0,0,0,.25)';

		rightMapTicksExtra[0].style.backgroundColor = 'rgba(255,255,255,1)';
        rightMapTicksExtra[1].style.backgroundColor = 'rgba(0,0,0,.25)';
		rightMapTicksExtra[2].style.backgroundColor = 'rgba(0,0,0,.25)';

        rightMapTicksExtraSwapped[0].style.backgroundColor = 'rgba(255,255,255,1)';
        rightMapTicksExtraSwapped[1].style.backgroundColor = 'rgba(0,0,0,.25)';
		rightMapTicksExtraSwapped[2].style.backgroundColor = 'rgba(0,0,0,.25)';
    } else if (value == 2) {
        rightMapTicks[0].style.backgroundColor = 'rgba(255,255,255,1)';
        rightMapTicks[1].style.backgroundColor = 'rgba(255,255,255,1)';
		rightMapTicks[2].style.backgroundColor = 'rgba(0,0,0,.25)';

        rightMapTicksSwapped[0].style.backgroundColor = 'rgba(255,255,255,1)';
        rightMapTicksSwapped[1].style.backgroundColor = 'rgba(255,255,255,1)';
		rightMapTicksSwapped[2].style.backgroundColor = 'rgba(0,0,0,.25)';

		rightMapTicksExtra[0].style.backgroundColor = 'rgba(255,255,255,1)';
        rightMapTicksExtra[1].style.backgroundColor = 'rgba(255,255,255,1)';
		rightMapTicksExtra[2].style.backgroundColor = 'rgba(0,0,0,.25)';

        rightMapTicksExtraSwapped[0].style.backgroundColor = 'rgba(255,255,255,1)';
        rightMapTicksExtraSwapped[1].style.backgroundColor = 'rgba(255,255,255,1)';
		rightMapTicksExtraSwapped[2].style.backgroundColor = 'rgba(0,0,0,.25)';
    } else {
		rightMapTicks[0].style.backgroundColor = 'rgba(255,255,255,1)';
        rightMapTicks[1].style.backgroundColor = 'rgba(255,255,255,1)';
		rightMapTicks[2].style.backgroundColor = 'rgba(255,255,255,1)';

        rightMapTicksSwapped[0].style.backgroundColor = 'rgba(255,255,255,1)';
        rightMapTicksSwapped[1].style.backgroundColor = 'rgba(255,255,255,1)';
		rightMapTicksSwapped[2].style.backgroundColor = 'rgba(255,255,255,1)';
		
		rightMapTicksExtra[0].style.backgroundColor = 'rgba(255,255,255,1)';
        rightMapTicksExtra[1].style.backgroundColor = 'rgba(255,255,255,1)';
		rightMapTicksExtra[2].style.backgroundColor = 'rgba(255,255,255,1)';

        rightMapTicksExtraSwapped[0].style.backgroundColor = 'rgba(255,255,255,1)';
        rightMapTicksExtraSwapped[1].style.backgroundColor = 'rgba(255,255,255,1)';
		rightMapTicksExtraSwapped[2].style.backgroundColor = 'rgba(255,255,255,1)';
	}
});

team1MapScore.on('change', value => {
    document.getElementById('left-team-score').innerHTML = value;
    document.getElementById('right-team-score-swapped').innerHTML = value;
    document.getElementById('left-team-score-extra').innerHTML = value;
    document.getElementById('right-team-score-extra-swapped').innerHTML = value;
});

team2MapScore.on('change', value => {
    document.getElementById('right-team-score').innerHTML = value;
    document.getElementById('left-team-score-swapped').innerHTML = value;
    document.getElementById('right-team-score-extra').innerHTML = value;
    document.getElementById('left-team-score-extra-swapped').innerHTML = value;
});


map1.on('change', value => {
    document.getElementById('map-1').style.backgroundImage = 'url(maps/' + value + '.png)';
    document.getElementById('map-1-name').innerHTML = value;
    if (value == 'default') {
        document.getElementById('map-1-name').innerHTML = "";
    }
});

map2.on('change', value => {
    document.getElementById('map-2').style.backgroundImage = 'url(maps/' + value + '.png)';
    document.getElementById('map-2-name').innerHTML = value;
    if (value == 'default') {
        document.getElementById('map-2-name').innerHTML = "";
    }
});

map3.on('change', value => {
    document.getElementById('map-3').style.backgroundImage = 'url(maps/' + value + '.png)';
    document.getElementById('map-3-name').innerHTML = value;
    if (value == 'default') {
        document.getElementById('map-3-name').innerHTML = "";
    }
});

map4.on('change', value => {
    document.getElementById('map-4').style.backgroundImage = 'url(maps/' + value + '.png)';
    document.getElementById('map-4-name').innerHTML = value;
    if (value == 'default') {
        document.getElementById('map-4-name').innerHTML = "";
    }
});

map5.on('change', value => {
    document.getElementById('map-5').style.backgroundImage = 'url(maps/' + value + '.png)';
    document.getElementById('map-5-name').innerHTML = value;
    if (value == 'default') {
        document.getElementById('map-5-name').innerHTML = "";
    }
});

map1Winner.on('change', value => {
    if (value == team1Acronym.value) {
        document.getElementById('map-1').style.backgroundColor = team1Color.value;
    }
    if (value == team2Acronym.value) {
        document.getElementById('map-1').style.backgroundColor = team2Color.value;
    }
    if (value == 'None') {
        document.getElementById('map-1').style.backgroundColor = 'initial';
    }
});

map2Winner.on('change', value => {
    if (value == team1Acronym.value) {
        document.getElementById('map-2').style.backgroundColor = team1Color.value;
    }
    if (value == team2Acronym.value) {
        document.getElementById('map-2').style.backgroundColor = team2Color.value;
    }
    if (value == 'None') {
        document.getElementById('map-2').style.backgroundColor = 'initial';
    }
});

map3Winner.on('change', value => {
    if (value == team1Acronym.value) {
        document.getElementById('map-3').style.backgroundColor = team1Color.value;
    }
    if (value == team2Acronym.value) {
        document.getElementById('map-3').style.backgroundColor = team2Color.value;
    }
    if (value == 'None') {
        document.getElementById('map-3').style.backgroundColor = 'initial';
    }
});

map4Winner.on('change', value => {
    if (value == team1Acronym.value) {
        document.getElementById('map-4').style.backgroundColor = team1Color.value;
    }
    if (value == team2Acronym.value) {
        document.getElementById('map-4').style.backgroundColor = team2Color.value;
    }
    if (value == 'None') {
        document.getElementById('map-4').style.backgroundColor = 'initial';
    }
});

map5Winner.on('change', value => {
    if (value == team1Acronym.value) {
        document.getElementById('map-5').style.backgroundColor = team1Color.value;
    }
    if (value == team2Acronym.value) {
        document.getElementById('map-5').style.backgroundColor = team2Color.value;
    }
    if (value == 'None') {
        document.getElementById('map-5').style.backgroundColor = 'initial';
    }
});

map1Score.on('change', value => {
    var element = document.getElementById('map-1-score')
    element.style.display = 'initial';

    if (value == '0-0') {
        element.style.display = 'none';
    }

    element.innerHTML = value;
});

map2Score.on('change', value => {
    var element = document.getElementById('map-2-score')
    element.style.display = 'initial';

    if (value == '0-0') {
        element.style.display = 'none';
    }

    element.innerHTML = value;
});

map3Score.on('change', value => {
    var element = document.getElementById('map-3-score')
    element.style.display = 'initial';

    if (value == '0-0') {
        element.style.display = 'none';
    }

    element.innerHTML = value;
});

map4Score.on('change', value => {
    var element = document.getElementById('map-4-score')
    element.style.display = 'initial';

    if (value == '0-0') {
        element.style.display = 'none';
    }

    element.innerHTML = value;
});

map5Score.on('change', value => {
    var element = document.getElementById('map-5-score')
    element.style.display = 'initial';

    if (value == '0-0') {
        element.style.display = 'none';
    }

    element.innerHTML = value;
});

extraBoolean.on('change', value => {
    if (extraBoolean.value == 'false') {
        document.getElementById('hud-extra-header').style.top = '-180px';
        document.getElementById('hud-extra-header-swapped').style.top = '-180px';
        document.getElementById('maps').style.bottom = '-150px';
        return;
    }
    document.getElementById('hud-extra-header').style.top = '0px';
    document.getElementById('hud-extra-header-swapped').style.top = '0px';
    document.getElementById('maps').style.bottom = '0px';
});