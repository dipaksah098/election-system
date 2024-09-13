from django.db import models

# Create your models here.


class Candidate(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='candidate_images')
    goals = models.TextField()
    party_name = models.CharField(max_length=100)
    party_logo = models.ImageField(upload_to='party_logo')
    votes = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.name} - {self.party_name}"
    
    def delete_image(self) -> None:
        """Delete the image and party logo associated with this candidate.

        This method takes no arguments and returns None.
        """
        self.image.delete()
        self.party_logo.delete()

class Service(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='service_images')
    description = models.TextField()

    def __str__(self):
        return self.name

class About(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='about_images')
    description = models.TextField()

    def __str__(self):
        return self.name
    
    def delete_image(self) -> None:
        """Delete the image associated with this candidate.

        This method takes no arguments and returns None.
        """
        self.image.delete()

class Voters(models.Model):
    voter_id = models.CharField(max_length=100 ,primary_key=True,unique=True) 
    voter_password = models.CharField(max_length=100,unique=True)
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='voter_images')
    email = models.EmailField(max_length=100,unique=True)
    phone = models.CharField(max_length=20)
    address = models.TextField()
    citizenship_front = models.ImageField(upload_to='=citizenship_front',unique=True)
    citizenship_back = models.ImageField(upload_to='citizenship_back',unique=True)
    status = models.CharField(max_length=100)
    
    def __str__(self):
        return f"{self.name} - {self.voter_id}"

    
    def delete_image(self) -> None:
        """Delete the image associated with this candidate.

        This method takes no arguments and returns None.
        """
        self.image.delete()
        self.citizenship_front.delete()
        self.citizenship_back.delete()    
    
    
    
    