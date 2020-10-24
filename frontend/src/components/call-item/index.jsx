import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  FormControlLabel,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import { POLITICAL_LEANINGS, VOTER_STATUS, US_STATES } from 'domains/constants'

const ItemWrapper = styled(Grid)`
  && {
    align-items: center;
    .right-col {
      text-align: right;
    }
  }
`
const CallItemWrapper = styled(Grid)`
  && {
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    margin-bottom: 1rem;
  }
`
const CallItem = ({ call = {}, recipient = {}, updateCallAction, loading }) => {
  const [showMore, toggleShowMore] = useState(false)
  const [editModal, toggleEditModal] = useState(false)
  const {
    first_name,
    last_name,
    state_residence,
    state_registered,
    registered_to_vote,
    political_leaning,
  } = recipient
  const { notes, completed, date } = call
  const [editNotes, setEditNotes] = useState(notes)
  const onUpdateData = (call, updatedData) => {
    console.log('call1', call)
    updateCallAction(call, updatedData)
    toggleEditModal(false)
  }

  return (
    <CallItemWrapper item xs={12}>
      <ItemWrapper container>
        <Grid item xs={8} className="left-col">
          {date && (
            <Typography variant="h5" component="h5">
              {' '}
              {date}
            </Typography>
          )}
          <Typography variant="subtitle1" component="subtitle1">
            {' '}
            {`${first_name} ${last_name}`}
          </Typography>
          <br />
        </Grid>
        <Grid item xs={4} className="right-col">
          {notes && (
            <FormControlLabel
              control={
                <Checkbox
                  checked={completed}
                  name="checkedB"
                  color="primary"
                  onChange={(ev) =>
                    onUpdateData(call, { completed: ev.target.checked })
                  }
                />
              }
              label="Contacted"
            />
          )}
        </Grid>
      </ItemWrapper>
      <ItemWrapper container spacing={2}>
        <Grid item xs={8} className="left-col">
          <Typography variant="subtitle1" component="subtitle1">
            {' '}
            State Residence
          </Typography>
        </Grid>
        <Grid item xs={4} className="right-col">
          <Typography variant="subtitle1" component="subtitle1">
            {US_STATES[state_residence?.toUpperCase()]}
          </Typography>
        </Grid>
        <Grid item xs={8} className="left-col">
          <Typography variant="subtitle1" component="subtitle1">
            {' '}
            State Registered
          </Typography>
        </Grid>
        <Grid item xs={4} className="right-col">
          <Typography variant="subtitle1" component="subtitle1">
            {US_STATES[state_registered?.toUpperCase()]}
          </Typography>
        </Grid>
        <Grid item xs={8} className="left-col">
          <Typography variant="subtitle1" component="subtitle1">
            {' '}
            Registered To Vote
          </Typography>
        </Grid>
        <Grid item xs={4} className="right-col">
          <Typography variant="subtitle1" component="subtitle1">
            {VOTER_STATUS[registered_to_vote]}
          </Typography>
        </Grid>
        <Grid item xs={8} className="left-col">
          <Typography variant="subtitle1" component="subtitle1">
            {' '}
            Political Leaning
          </Typography>
        </Grid>
        <Grid item xs={4} className="right-col">
          <Typography variant="subtitle1" component="subtitle1">
            {POLITICAL_LEANINGS[political_leaning]}
          </Typography>
        </Grid>
      </ItemWrapper>
      {notes && (
        <>
          <Button color="primary" onClick={() => toggleShowMore(!showMore)}>
            {showMore ? 'Hide Notes' : 'Show Notes'}
          </Button>
          {showMore && (
            <div>
              <Typography variant="subtitle1" component="subtitle1">
                {' '}
                <i>{notes === '' ? 'No Notes' : notes}</i>
              </Typography>
              <IconButton onClick={() => toggleEditModal(true)}>
                <EditIcon />
              </IconButton>
              <Dialog
                onClose={() => toggleEditModal(false)}
                aria-labelledby="simple-dialog-title"
                open={editModal}>
                <DialogTitle id="simple-dialog-title">Edit Notes</DialogTitle>
                <DialogContent>
                  <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    variant="outlined"
                    value={editNotes}
                    onChange={(ev) => setEditNotes(ev.target.value)}
                  />
                </DialogContent>
                <DialogActions>
                  <Button
                    autoFocus
                    onClick={() => toggleEditModal(false)}
                    color="primary">
                    Cancel
                  </Button>
                  <Button
                    onClick={() => onUpdateData(call, { notes: editNotes })}
                    color="primary">
                    Ok
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          )}
        </>
      )}
    </CallItemWrapper>
  )
}
export default CallItem
