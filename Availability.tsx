import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, Clock } from "lucide-react";

const Availability = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  
  // Example: Mark specific dates as busy/free (you can customize this)
  const busyDates = [
    new Date(2025, 9, 25), // October 25, 2025
    new Date(2025, 9, 28),
    new Date(2025, 10, 5),
  ];

  const isDateBusy = (date: Date) => {
    return busyDates.some(
      busyDate =>
        busyDate.getDate() === date.getDate() &&
        busyDate.getMonth() === date.getMonth() &&
        busyDate.getFullYear() === date.getFullYear()
    );
  };

  const getDateStatus = (date: Date | undefined) => {
    if (!date) return null;
    return isDateBusy(date) ? "busy" : "free";
  };

  return (
    <section id="availability" className="min-h-screen flex items-center py-20 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            &lt; Availability /&gt;
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Select a date to check when I'm available for projects and meetings
          </p>
        </div>

        {/* Calendar Card */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="glass hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-primary" />
                Select a Date
              </CardTitle>
              <CardDescription>
                Click on any date to check availability
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-lg border border-border bg-background/50 pointer-events-auto"
                modifiers={{
                  busy: busyDates,
                }}
                modifiersStyles={{
                  busy: {
                    backgroundColor: 'hsl(var(--destructive) / 0.2)',
                    color: 'hsl(var(--destructive-foreground))',
                    fontWeight: 'bold',
                  },
                }}
              />
            </CardContent>
          </Card>

          {/* Status Display */}
          <div className="flex flex-col gap-6">
            <Card className="glass hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent" />
                  Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedDate ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Selected Date:</span>
                      <span className="font-semibold">
                        {selectedDate.toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Availability:</span>
                      <Badge
                        variant={getDateStatus(selectedDate) === 'free' ? 'default' : 'destructive'}
                        className="text-sm px-4 py-1"
                      >
                        {getDateStatus(selectedDate) === 'free' ? '✓ Available' : '✗ Busy'}
                      </Badge>
                    </div>
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-8">
                    Select a date to view availability
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Legend */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-lg">Legend</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded bg-primary" />
                  <span className="text-sm">Selected Date</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded bg-destructive/20" />
                  <span className="text-sm">Busy Days</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded bg-accent/20" />
                  <span className="text-sm">Available Days</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <p className="text-muted-foreground">
            Need to schedule something? <a href="#contact" className="text-primary hover:underline font-medium">Contact me</a> to discuss your project
          </p>
        </div>
      </div>
    </section>
  );
};

export default Availability;
