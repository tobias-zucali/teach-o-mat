#!/bin/bash
set -e

### Configuration ###

SERVER=ssh-v158413@zucali.at
APP_DIR=/www/htdocs/v158413/teach-o-mat.org
KEYFILE=
REMOTE_SCRIPT_PATH=


### Library ###

function run()
{
  echo "Running: $@"
  "$@"
}


### Automation steps ###

if [[ "$KEYFILE" != "" ]]; then
  KEYARG="-i $KEYFILE"
else
  KEYARG=
fi

run scp $KEYARG deploy/work.sh $SERVER:$REMOTE_SCRIPT_PATH
echo
echo "---- Running deployment script on remote server ----"
run ssh $KEYARG $SERVER bash $REMOTE_SCRIPT_PATH