from django.db import models


class CounterManager(models.Manager):
    
    def get_instance(self):
        counter = self.first()
        if not counter:
            counter = Counter(count = 0)
            counter.save()
        return counter
    
    def next_count(self):
        return self.get_instance().increment()


class Counter(models.Model):
    count = models.IntegerField()
    objects = CounterManager()

    def increment(self):
        previous = self.count
        
        # Thread safe increment by one.
        self.count = models.F('count') + 1
        self.save()
        
        return previous + 1
