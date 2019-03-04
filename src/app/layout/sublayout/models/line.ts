import { inject } from "@angular/core/testing";

export class UserList
{
    constructor()
    {
        this._email='';
        // this.IsAdmin=null;
        this._internal=0;
        this._external=0;
        this._isactive=0;
        this.action='';
    }
    public _email:string;
    //public IsAdmin:number;
    public _internal:number;
    public _external:number;
    public _isactive:number;
    public action:'';
}
export class Line_BurnerLockout
{
    // public class_fields:string[];
    constructor()
    {
        this.Datetime_Hours=null;
        this.B_Burner_Lockout=null;
        this.C_Burner_Lockout=null;
        this.D_Burner_Lockout=null;
        this.Z1_Burner_Lockout=null;
        this.Z2_Burner_Lockout=null;
        this.Z3_Burner_Lockout=null;
        this.Z4_Burner_Lockout=null;
        this.Z5_Burner_Lockout=null;
    }
    public Datetime:Date;
    public Datetime_Hours:Date;
    public B_Burner_Lockout:number;
    public C_Burner_Lockout:number;
    public D_Burner_Lockout:number;
    public Z1_Burner_Lockout:number;
    public Z2_Burner_Lockout:number;
    public Z3_Burner_Lockout:number;
    public Z4_Burner_Lockout:number;
    public Z5_Burner_Lockout:number;
}

export class Line_PreRoller
{
    // public class_fields:string[];
    constructor()
    {
        this.Datetime_Hours=null;
        this.PreRoller_LT=null;
        this.PreRoller_LB=null;
        this.PreRoller_RT=null;
        this.PreRoller_RB=null;
        
    }
    public Datetime:Date;
    public Datetime_Hours:Date;
    public PreRoller_LT:number;
    public PreRoller_LB:number;
    public PreRoller_RT:number;
    public PreRoller_RB:number;
    
}

export class Line_BeadingMotor
{
    // public class_fields:string[];
    constructor()
    {
        this.Datetime_Hours=null;
        this.Beading_Motor_LT=null;
        this.Beading_Motor_LB=null;
        this.Beading_Motor_RT=null;
        this.Beading_Motor_RB=null;
        
    }
    public Datetime:Date;
    public Datetime_Hours:Date;
    public Beading_Motor_LT:number;
    public Beading_Motor_LB:number;
    public Beading_Motor_RT:number;
    public Beading_Motor_RB:number;  
}

export class Line_BrushMotor
{
    // public class_fields:string[];
    constructor()
    {
        this.Datetime_Hours=null;
        this.Brush_Motor_L=null;
        this.Brush_Motor_R=null;      
    }
    public Datetime:Date;
    public Datetime_Hours:Date;
    public Brush_Motor_L:number;
    public Brush_Motor_R:number;
}

export class Line_RinseBlower
{
    // public class_fields:string[];
    constructor()
    {
        this.Datetime_Hours=null;
        this.Rinse_Blower_L=null;
        this.Rinse_Blower_R=null;      
    }
    public Datetime:Date;
    public Datetime_Hours:Date;
    public Rinse_Blower_L:number;
    public Rinse_Blower_R:number;
}

export class Line_Menu
{
    Line_RequestMethods_const = (): Array<any> => 
    {
        return [
            { "Title": "Burner Lockout","method":"GetLineInfoBurnerReport"},
            { "Title": "Pre-Roller Motor","method":"GetLineInfoPreRollerReport"},
            { "Title": "Beading Motor","method":"GetLineInfoBeadingMotorReport"},
            { "Title": "Cleaning Brush Motor","method":"GetLineInfoBrushMotorReport"},
            { "Title": "Rinse Blower","method":"GetLineInfoRinseBlowerReport"},

            { "Title": "Main Chain Amp Top","method":"GetLineInfoBurnerReport"},
            { "Title": "Main Chain Amp Bottom","method":"GetLineInfoBurnerReport"},
            //{ "Title": "Low Temperature Alarm","method":"GetLineInfoBurnerReport"},
            
            // { "Title": "Latex Level","method":"GetLineInfoBurnerReport"},
            // { "Title": "Chlorine Level","method":"GetLineInfoBurnerReport"},

            // { "Title": "Coagulant Level","method":"GetLineInfoBurnerReport"},
            // { "Title": "Oven Temperature","method":"GetLineInfoBurnerReport"},
            // { "Title": "Gas","method":"GetLineInfoBurnerReport"},
            // { "Title": "Electricity","method":"GetLineInfoBurnerReport"},

            // { "Title": "Acid 1","method":"GetLineInfoBurnerReport"},
            // { "Title": "Acid 2","method":"GetLineInfoBurnerReport"},
            // { "Title": "Acid Bath","method":"GetLineInfoBurnerReport"},
            // { "Title": "Alkaline 1","method":"GetLineInfoBurnerReport"},

            // { "Title": "Alkaline 2","method":"GetLineInfoBurnerReport"},
            // { "Title": "Hot Bath","method":"GetLineInfoBurnerReport"},
            // { "Title": "Hot Rinse","method":"GetLineInfoBurnerReport"},
            // { "Title": "Hot Water","method":"GetLineInfoBurnerReport"},
            
            // { "Title": "Coagulant Tank","method":"GetLineInfoBurnerReport"},
            // { "Title": "Latex Tank","method":"GetLineInfoBurnerReport"} 
        ]       
    };
}
export class Describer 
{
    static describe(instance): Array<string> 
    {
        return Object.getOwnPropertyNames(instance);
    }
}