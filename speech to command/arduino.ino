#include <Servo.h>
Servo arm;
void setup()
{
    Serial.begin(9600);
    arm.attach(9);
}

void loop()
{
    String command = Serial.readString();
    if (command.indexOf("left")!=-1 || command.indexOf("يسار")!=-1)
    {
        arm.write(0);
            delay(1500);
    }
    else if (command.indexOf("right") !=-1|| command.indexOf("يمين")!=-1)
    {
        arm.write(180);
        delay(1500);
    }

}