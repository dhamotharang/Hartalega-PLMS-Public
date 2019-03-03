export class ColumnName {
    ColumnName(Name:string)
    {
        switch(Name)
        {
            //Burner Lockout
            case 'Datetime_Hours':return 'Hours'; 
            case 'B_Burner_Lockout':return 'B'; 
            case 'C_Burner_Lockout':return 'C'; 
            case 'D_Burner_Lockout':return 'D'; 
            case 'Z1_Burner_Lockout':return 'Z1'; 
            case 'Z2_Burner_Lockout':return 'Z2'; 
            case 'Z3_Burner_Lockout':return 'Z3';
            case 'Z4_Burner_Lockout':return 'Z4';
            case 'Z5_Burner_Lockout':return 'Z5';

            //Pre-Roller Motor 
            case 'PreRoller_LT':return'LT';
            case 'PreRoller_LB':return'LB';
            case 'PreRoller_RT':return'RT';
            case 'PreRoller_RB':return'RB';

            //Beading Motor
            case 'Beading_Motor_LT':return'LT';
            case 'Beading_Motor_LB':return'LB';
            case 'Beading_Motor_RT':return'RT';
            case 'Beading_Motor_RB':return'RB';

            //Cleaning Brush Motor
            case 'Brush_Motor_L':return'L';
            case 'Brush_Motor_R':return'R';
            
            //Rinse Blower
            case 'Rinse_Blower_L':return'L';
            case 'Rinse_Blower_R':return'R';

            default: return Name;
        }
    }

    HourFormat(Hour:number)
    {
        switch(Hour)
        {
            case 0 : return "00:00";
            case 1 : return "01:00";
            case 2 : return "02:00";
            case 3 : return "03:00";
            case 4 : return "04:00";
            case 5 : return "05:00";
            case 6 : return "06:00";
            case 7 : return "07:00";
            case 8 : return "08:00";
            case 9 : return "09:00";
            case 10 : return "10:00";
            case 11 : return "11:00";
            case 12 : return "12:00";
            case 13 : return "13:00";
            case 14 : return "14:00";
            case 15 : return "15:00";
            case 16 : return "16:00";
            case 17 : return "17:00";
            case 18 : return "18:00";
            case 19 : return "19:00";
            case 20 : return "20:00";
            case 21 : return "21:00";
            case 22 : return "22:00";
            case 23 : return "23:00";
        }
    }
}