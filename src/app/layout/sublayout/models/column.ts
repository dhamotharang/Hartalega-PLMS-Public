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
}