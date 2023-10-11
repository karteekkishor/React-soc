import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function Slide() {
  return (
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="Dark Mode" />
    </FormGroup>
  );
}