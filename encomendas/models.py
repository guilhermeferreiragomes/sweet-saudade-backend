from django.db import models

class Encomenda(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Encomenda #{self.id}"