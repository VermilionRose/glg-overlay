'use strict';

module.exports = function (nodecg) {
	nodecg.Replicant('eventName', {defaultValue: 'Pit of Valor'});
	nodecg.Replicant('hostName', {defaultValue: 'Great Lakes Gaming'});
	nodecg.Replicant('hostLogo', {defaultValue: 'glg'});

	nodecg.Replicant('team1Name', {defaultValue: 'Team 1'});
	nodecg.Replicant('team2Name', {defaultValue: 'Team 2'});
	nodecg.Replicant('team1Acronym', {defaultValue: 'Team 1 Acronym'});
	nodecg.Replicant('team2Acronym', {defaultValue: 'Team 2 Acronym'});

	nodecg.Replicant('team1Color', {defaultValue: 'green'});
	nodecg.Replicant('team2Color', {defaultValue: 'red'});

	nodecg.Replicant('team1Logo', {defaultValue: 'default'});
	nodecg.Replicant('team2Logo', {defaultValue: 'default'});

	nodecg.Replicant('mapCount', {defaultValue: '3'});

	nodecg.Replicant('team1MapScore', {defaultValue: '0'});
	nodecg.Replicant('team2MapScore', {defaultValue: '0'});

	nodecg.Replicant('team1SeriesScore', {defaultValue: '0'});
	nodecg.Replicant('team2SeriesScore', {defaultValue: '0'});

	nodecg.Replicant('sideSwitch', {defaultValue: '0'});

	nodecg.Replicant('casterLeft', {defaultValue: 'Caster Left'});
	nodecg.Replicant('casterRight', {defaultValue: 'Caster Right'});

	nodecg.Replicant('map1', {defaultValue: 'default'});
	nodecg.Replicant('map2', {defaultValue: 'default'});
	nodecg.Replicant('map3', {defaultValue: 'default'});
	nodecg.Replicant('map4', {defaultValue: 'default'});
	nodecg.Replicant('map5', {defaultValue: 'default'});

	nodecg.Replicant('map1Winner', {defaultValue: 'none'});
	nodecg.Replicant('map2Winner', {defaultValue: 'none'});
	nodecg.Replicant('map3Winner', {defaultValue: 'none'});
	nodecg.Replicant('map4Winner', {defaultValue: 'none'});
	nodecg.Replicant('map5Winner', {defaultValue: 'none'});

	nodecg.Replicant('map1Score', {defaultValue: '0-0'});
	nodecg.Replicant('map2Score', {defaultValue: '0-0'});
	nodecg.Replicant('map3Score', {defaultValue: '0-0'});
	nodecg.Replicant('map4Score', {defaultValue: '0-0'});
	nodecg.Replicant('map5Score', {defaultValue: '0-0'});

	nodecg.Replicant('startTime');

	nodecg.Replicant('ExtraBoolean', {defaultValue: 'false'});

	nodecg.Replicant('TeamSideSwapBoolean', {defaultValue: 'false'})

	nodecg.Replicant('event1Title', {defaultValue: 'Event 1 Title'});
	nodecg.Replicant('event1Info', {defaultValue: 'Event 1 Info'});
	nodecg.Replicant('event2Title', {defaultValue: 'Event 2 Title'});
	nodecg.Replicant('event2Info', {defaultValue: 'Event 2 Info'});

	nodecg.Replicant('tip1Title', {defaultValue: 'Tip 1 Title'});
	nodecg.Replicant('tip1Info', {defaultValue: 'Tip 1 Info'});
	nodecg.Replicant('tip2Title', {defaultValue: 'Tip 2 Title'});
	nodecg.Replicant('tip2Info', {defaultValue: 'Tip 2 Info'});
};
