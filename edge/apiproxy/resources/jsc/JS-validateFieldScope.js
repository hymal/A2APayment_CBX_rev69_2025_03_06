var fieldScope = context.getVariable("requestLogs.fieldScope");
var appScopes = context.getVariable('verifyapikey.Verify-API-Key.app_scope');
appScopes = appScopes ? appScopes.split(',') : '';
var isValidFieldScope = appScopes.indexOf(fieldScope) == -1 ? false : true;
if(isValidFieldScope === false)
{
    context.setVariable("ErrorMessage","Scope Validation Failed");
    throw 'Scope Validation Failed';
}