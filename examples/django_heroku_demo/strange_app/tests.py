from django.test import TestCase
from strange_app.models import Counter


class CounterTestCase(TestCase):

    def test_instance(self):
        a = Counter.objects.get_instance()
        b = Counter.objects.get_instance()
        self.assertEqual(a.pk, b.pk)
        self.assertEqual(1, len(Counter.objects.all()))

    def test_count(self):
        a = Counter.objects.get_instance()
        self.assertEqual(a.count + 1, Counter.objects.next_count())
        b_count = Counter.objects.get_instance().increment()
        self.assertEqual(a.count + 2, Counter.objects.first().count)
        self.assertEqual(a.count + 2, b_count)
