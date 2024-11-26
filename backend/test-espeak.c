#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include </opt/local/include/espeak-ng/speak_lib.h>
 
 espeak_AUDIO_OUTPUT output = AUDIO_OUTPUT_SYNCH_PLAYBACK;
 char *path = NULL;
 void* user_data;
 unsigned int *identifier;
 
 int main(int argc, char* argv[]) {
  size_t text_len = strlen(argv[1]) + 1; // Include space for null terminator
  char *text = malloc(text_len * sizeof(char)); // Allocate memory dynamically
  strncpy(text, argv[1], text_len - 1); // Copy the string from argv[1]
  text[text_len - 1] = '\0'; // Ensure null termination

   char voicename[] = "la"; // Set voice by its name
   
   int buflength = 500, options = 0;
   unsigned int position = 0, position_type = 0, end_position = 0, flags = espeakCHARS_AUTO;
   espeak_Initialize(output, buflength, path, options);
   espeak_SetVoiceByName(voicename);
   printf("Saying  '%s'...\n", text);
   espeak_Synth(text, buflength, position, position_type, end_position, flags, identifier, user_data);
   printf("Done\n");
   return 0;
 }

