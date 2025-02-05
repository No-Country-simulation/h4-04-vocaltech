import { ValidateNested } from 'class-validator';
import { Type } from "class-transformer";
import { ComunicacionDto } from './comunicacion.dto';
import { PitchDto } from './pitch.dto';
import { MvpDto } from './mvp.dto';
import { TalentosDto } from './talento.dto';

export class CreateLeadRespuestasDto{
    @ValidateNested()
    @Type(() => ComunicacionDto)
    comunicacion: ComunicacionDto;
    @ValidateNested()
    @Type(() => PitchDto)
    pitch: PitchDto;
    @Type(() => MvpDto)
    @ValidateNested()
    mvp: MvpDto;
    @ValidateNested()
    @Type(() => TalentosDto)
    talentos: TalentosDto;
}