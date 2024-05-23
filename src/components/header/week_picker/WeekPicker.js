import * as React from 'react';
import dayjs from 'dayjs';
import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { TimeClock } from '@mui/x-date-pickers/TimeClock';
import './style.css';

const today = dayjs();
const next_week = dayjs().add(6, 'day');
const now = dayjs();

export default function DateTimeRangePickerValue() {
  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid
          container
          columns={{ xs: 1, lg: 2 }}
          spacing={4}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <DateCalendar
              defaultValue={today}
              minDate={today}
              maxDate={next_week}
            />
          </Grid>
          <Grid item>
            <TimeClock defaultValue={now} views={['hours']}/>
          </Grid>
        </Grid>
      </LocalizationProvider>
  );
}

<TimeClock defaultValue={now} views={['hours']}/>