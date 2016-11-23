//=============================================================================
// SLY_OnlySoundOptions.js
//=============================================================================

/*:
 * @plugindesc Simplify the options menu by removing "Always Dash" and "Command Remember". Just keeping the sound options.
 * @author Sly
 */

Window_Options.prototype.makeCommandList = function() {
    this.addVolumeOptions();
};
