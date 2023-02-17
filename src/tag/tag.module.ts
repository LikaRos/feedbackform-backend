import { Module } from "@nestjs/common/decorators";
import { TagController } from './tag.controller';
import { TagService } from './tag.service';


@Module({
	controllers: [TagController],
	providers: [TagService],
	
})
export class TagModule {}