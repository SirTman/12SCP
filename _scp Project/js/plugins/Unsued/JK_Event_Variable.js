//=============================================================================
// JK_EventVariable.js
//=============================================================================

/*:
* @plugindesc 
* @author Jackus
* 
* @plugindesc Makes a variable contain the ID of the event being executed. Common Events will return the Event that last ran.
*
* @help 
* --------------------------------------------------------------------------------
* Free for commercial and non commercial use.
* Version 1.0
* --------------------------------------------------------------------------------
*
* --------------------------------------------------------------------------------
* Version History
* --------------------------------------------------------------------------------
* 1.0 - Release
*
* @param Variable ID
* @desc The variable where the event ID is stored.
* @default 1
*/

(function() {
	var parameters = PluginManager.parameters('JK_EventVariable');
	var JKeventvariableid = Number(parameters['Variable ID']) || 1;
	
	var _JackusGame_Interpreter_prototype_setup = Game_Interpreter.prototype.setup;
	Game_Interpreter.prototype.setup = function(list, eventId) {
		_JackusGame_Interpreter_prototype_setup.call(this, list, eventId);
		var oldValue = $gameVariables.value(JKeventvariableid);
		$gameVariables.setValue(JKeventvariableid, oldValue = eventId);
	};
	
})();