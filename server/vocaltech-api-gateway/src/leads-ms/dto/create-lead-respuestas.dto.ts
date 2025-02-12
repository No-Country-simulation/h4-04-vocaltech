import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ComunicacionDto } from './comunicacion.dto';
import { MvpDto } from './mvp.dto';
import { PitchDto } from './pitch.dto';
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