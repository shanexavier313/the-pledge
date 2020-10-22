import React from 'react'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'

export const FormField = ({
  name,
  label,
  type = 'text',
  handleBlur,
  handleChange,
  helperText,
  error,
  list,
  rows = 1,
  values,
  description,
}) => {
  console.log(error)
  return (
    <>
      {list && (
        <FormControl
          variant="outlined"
          fullWidth
          margin="normal"
          size="small"
          error={error}>
          <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
          <Select
            fullWidth
            label={label}
            name={name}
            onBlur={handleBlur}
            onChange={handleChange}
            value={values[name]}>
            <MenuItem value={''}></MenuItem>
            {Object.keys(list).map((key, index) => (
              <MenuItem key={index} value={key}>
                {list[key]}
              </MenuItem>
            ))}
          </Select>
          {description && <FormHelperText>{description}</FormHelperText>}
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
      )}
      {!list && (
        <TextField
          error={error}
          fullWidth
          helperText={helperText}
          label={label}
          margin="normal"
          name={name}
          type={type}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values[name]}
          variant="outlined"
          size="small"
          rows={rows}
          InputLabelProps={
            type === 'date' && {
              shrink: true,
            }
          }
        />
      )}
    </>
  )
}
