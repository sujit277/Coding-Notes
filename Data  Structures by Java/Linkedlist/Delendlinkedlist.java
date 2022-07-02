/* Java program to Del last ELement of the linkedlist */

public class Delendlinkedlist
{
private Listnode head;
private static class Listnode
{
private int data;
private Listnode next;
public Listnode(int data)
{
this.data = data;
this.next = null;
}
}
public void display()
{
Listnode current = head;
while(current!=null)
{
System.out.print(current.data+"-->");
current = current.next;
}
System.out.println("null");
}
public void delend()
{
if(head==null)
{
System.out.println("Linkedlist is Empty");
}
else if(head.next == null)
{
head = null;
}
else
{
Listnode ptr = head;
Listnode ptr2 = head;
while(ptr.next != null)
{
ptr2 = ptr;
ptr = ptr.next;
}
ptr2.next = null;
ptr = null;
}
}
public static void main(String args[])
{
Delendlinkedlist del = new Delendlinkedlist();
del.head = new Listnode(2);
Listnode first = new Listnode(3);
Listnode second = new Listnode(4);
Listnode third = new Listnode(7);
del.head.next = first;
first.next = second;
second.next = third;
del.display();
del.delend();
del.display();
}
}