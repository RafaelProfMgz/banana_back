import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupabaseModule } from './supabase/supabase.module';
import { ChatModule } from './chat/chat.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [SupabaseModule, ChatModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
